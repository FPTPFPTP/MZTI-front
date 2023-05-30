import { css } from '@emotion/react';

export const AdminStyled = () => css`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
    display: flex;

    .left {
        width: 20vw;
        border-right: 1px solid #ccc;
        padding: 30px;
        h1 {
            font-size: 4rem;
            padding-top: 10vh;
        }
        .menu {
            margin-top: 6rem;
        }
        li {
            margin-top: 2rem;
            h4 {
                font-size: 1.6rem;
                margin-bottom: 10px;
            }
            p {
                font-size: 1.2rem;
            }
        }
    }
    .right {
        width: 80vw;

        h3 {
            font-size: 3rem;
            padding: 60px 67px;
        }
        .list {
            padding: 0 67px;
            .listTable {
                margin-top: 3rem;
                width: 100%;
                thead,
                tbody {
                    width: 100%;
                }
                th,
                td {
                    font-size: 1.2rem;
                    padding: 10px 0;
                    text-align: center;
                }
            }
        }
        .searchBar {
            height: 50px;
            .search {
                border: 1px solid #ccc;
                font-size: 16px;
                border-radius: 4px;
                padding: 10px 20px;
                height: 100%;
                width: 400px;
                margin-right: 4px;
            }
            .searchButton {
                background-color: #333;
                color: #fff;
                border-radius: 4px;
                height: 100%;
                width: 80px;
            }
        }
    }
`;
