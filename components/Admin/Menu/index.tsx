import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';

export default function AdminMenu() {
    return (
        <Paper sx={{ width: 320 }}>
            <MenuItem>
                <h1>
                    MZTI
                    <br />
                    관리자모드
                </h1>
            </MenuItem>
            <MenuList>
                <MenuItem>
                    <Link href="/home">
                        <ListItemText>
                            <HomeIcon />
                            서비스화면
                        </ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/mypage">
                        <ListItemText>
                            <Person2Icon />
                            마이페이지
                        </ListItemText>
                    </Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Link href="/admin/report">
                        <ListItemText>신고관리</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/admin/userMng">
                        <ListItemText>유저관리</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/admin/support">
                        <ListItemText>서포트센터</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/admin/notice">
                        <ListItemText>공지사항</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/admin/reservation">
                        <ListItemText>예약발행</ListItemText>
                    </Link>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}
