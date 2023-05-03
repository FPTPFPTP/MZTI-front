import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Header, Input, ProfileUpload } from '@components/Commons';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { editLayout, editTitle, myPageEditStyle } from '@styles/pages/mypageEditStyled';
import { BaseButton } from '@/components/Commons/Button';
import { MbtiStyles, Container, editButton, MbtiFlex } from '@styles/pages/mypageEditStyled';
import ProfileEdit from '@assets/icons/profile_edit.svg';
import { IUserModel } from '@/types/user';
import { Button, Modal } from 'antd';
import Mbti from '@/components/Commons/Mbti';
import axios from '@/utils/axios';
import { useRouter } from 'next/router';

const edit = () => {
    const myInfo = useRecoilValue(myPageInfo);

    const { register, watch, reset, setValue } = useForm<IUserModel>();
    const { nickname } = watch();
    // back단 프로필
    const [profileData, setProfileData] = useState<File | null>(null);
    // view단 프로필사진
    const [previewFileSrc, setPreviewFileSrc] = useState<string>('');
    const [mbti, setMbti] = useState<string>('');
    // mbti 모달 open
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const router = useRouter();

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

    const handleEdit = useCallback(() => {
        try {
            const fmData = new FormData();

            const nicknameEdit = () => {
                return axios.patch(`/user/nickname`, {
                    nickname: nickname,
                });
            };

            const mbtiEdit = () => {
                return axios.patch(`/user/mbti`, {
                    mbti: mbti,
                });
            };

            const profileEdit = () => {
                return axios.patch(`/user/profile`, fmData, {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                });
            };

            if (profileData !== null) {
                fmData.append('file', profileData);
            }

            Promise.all([profileEdit(), nicknameEdit(), mbtiEdit()])
                .then((res: any) => {
                    router.push('/mypage');
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.log(error);
        }
    }, [nickname, mbti, profileData]);

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
            const { nickname, mbti, profileImage } = myInfo;
            setValue('nickname', nickname);
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
                <BaseButton onClick={handleEdit}>수정 완료하기</BaseButton>
            </div>
        </main>
    );
};

export default edit;
