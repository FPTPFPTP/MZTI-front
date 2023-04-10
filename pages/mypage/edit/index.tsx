import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Header, Input, ProfileUpload } from '@components/Commons';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { editLayout, editTitle, myPageEditStyle } from '@styles/pages/mypageEditStyled';
import { BlackButton } from '@/components/Commons/Button';
import { MbtiStyles, Container, editButton, MbtiFlex } from '@styles/pages/mypageEditStyled';
import ProfileEdit from '@assets/icons/profile_edit.svg';
import { IUserModel } from '@/types/user';
import { Button, Modal } from 'antd';
import Mbti from '@/components/Commons/Mbti';
import axios from '@/utils/axios';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { postMyPage } from '@/apis/user';

const edit = () => {
    const myInfo = useRecoilValue(myPageInfo);

    const { register, watch, reset, setValue } = useForm<IUserModel>();
    const { nickname, intro } = watch();
    // back단 프로필
    const [profileData, setProfileData] = useState<File | null>(null);
    // view단 프로필사진
    const [previewFileSrc, setPreviewFileSrc] = useState<string>('');
    // mbti
    const [mbti, setMbti] = useState<string>('');
    // mbti 모달 open
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const router = useRouter();
    // 댓글 삭제
    const { mutate } = useMutation(({ nickname, mbti, intro }: IUserModel) => postMyPage({ nickname, mbti, intro }));

    /**
     * 프로필 사진 업로드
     * @param param0
     */
    const updateProfileImg = async ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
        if (files) {
            const file = files[0];
            // 백엔드에 보낼 것
            setProfileData(file);
            // 로컬용
            setPreviewFileSrc(URL.createObjectURL(new Blob([file])));
        }
    };

    const handleEdit = () => {
        try {
            const fmData = new FormData();

            // 프로필 사진 변경
            const profileEdit = () => {
                return axios.patch(`/user/profile`, fmData, {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                });
            };

            // string 변경
            const textEdit = () => {
                mutate(
                    { nickname, mbti, intro },
                    // {
                    //     onSuccess: () => {},
                    // },
                );
            };

            if (profileData !== null) {
                fmData.append('file', profileData);
            }
            Promise.all([profileEdit(), textEdit()])
                .then((res: any) => {
                    alert('수정 완료되었습니다.');
                    router.push('/mypage');
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * mbti 수정
     * @mbti {string}
     */
    const handleMbti = useCallback(
        (mbti: string) => {
            setMbti(mbti);
        },
        [mbti],
    );

    const handleMbtiModal = () => {
        confirm('MBTI를 바꾸시겠습니까?');
        setIsModalOpen(false);
    };

    // 모달 열고 닫기
    const handleModal = () => {
        setIsModalOpen((isModalOpen) => !isModalOpen);
    };

    useEffect(() => {
        if (myInfo) {
            const { nickname, mbti, intro, profileImage } = myInfo;
            setValue('nickname', nickname);
            setValue('intro', intro);
            setMbti(mbti);
            if (profileImage) {
                setPreviewFileSrc(profileImage);
            }
        } else {
            router.back();
        }
    }, [myInfo]);

    useEffect(() => {
        return () => {
            if (previewFileSrc) {
                URL.revokeObjectURL(previewFileSrc);
            }
        };
    }, []);

    return (
        <main css={myPageEditStyle}>
            <Header title="회원정보 수정" />
            <form css={editLayout}>
                <div>
                    <h4 css={editTitle}>닉네임</h4>
                    <Input
                        inputStyle={'borderLess'}
                        placeholder={'닉네임을 입력해주세요'}
                        isResetBtn={!!nickname}
                        handleReset={() => reset()}
                        maxLength={8}
                        {...register('nickname', {
                            required: true,
                        })}
                    />
                </div>

                <div>
                    <h4 css={editTitle}>한 줄 소개</h4>
                    <Input
                        inputStyle={'borderLess'}
                        placeholder={'한 줄 소개'}
                        isResetBtn={!!intro}
                        handleReset={() => reset()}
                        maxLength={30}
                        {...register('intro', {
                            required: true,
                        })}
                    />
                </div>

                <div>
                    <div css={editTitle}>
                        <h4>프로필 사진</h4>
                        <span className="desc">카메라 버튼을 눌러 프로필 사진 변경</span>
                    </div>

                    <div css={Container}>
                        <ProfileUpload previewFileSrc={previewFileSrc} handleUpdateProfileImg={updateProfileImg} />
                    </div>
                </div>

                <div>
                    <h4 css={editTitle}>MBTI</h4>

                    <div css={MbtiFlex}>
                        <p css={MbtiStyles}>{mbti}</p>
                        <div>
                            <Button type="primary" css={editButton} onClick={handleModal}>
                                <ProfileEdit />
                            </Button>
                            <Modal
                                closable={false}
                                open={isModalOpen}
                                okText="확인"
                                onCancel={handleModal}
                                onOk={handleMbtiModal}
                                cancelText="닫기"
                                centered={false}
                            >
                                <Mbti mbti={mbti} onUpdateMbti={handleMbti} />
                            </Modal>
                        </div>
                    </div>
                </div>
            </form>
            <div className="buttonWrap">
                <BlackButton onClick={handleEdit} type="submit">
                    수정 완료하기
                </BlackButton>
            </div>
        </main>
    );
};

export default edit;
