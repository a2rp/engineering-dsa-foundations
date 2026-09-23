// App.styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,
    Header: styled.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,
    Main: styled.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }

        .goToTop {
            position: fixed;
            right: 24px;
            bottom: 24px;
            z-index: 100;
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-primary);
            border-radius: 50%;
            background: var(--color-surface-2);
            color: var(--color-primary);
            font-size: 20px;
            box-shadow: 0 10px 24px var(--color-shadow);
            transition: border-color 180ms ease, box-shadow 180ms ease;

            &:hover,
            &:focus-visible {
                border-color: var(--color-primary-hover);
                box-shadow: 0 0 0 5px color-mix(in srgb, var(--color-primary) 16%, transparent);
                outline: none;
            }
        }
    `,
};
