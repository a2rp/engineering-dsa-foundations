import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 15px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        .copyright a {
            color: var(--color-text-secondary);
            font-weight: 700;
        }

        .copyright a:hover,
        .copyright a:focus-visible {
            color: var(--color-primary);
        }

        .footerLinks {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 8px;

            a {
                width: 34px;
                height: 34px;
                display: inline-grid;
                place-items: center;
                border: 1px solid var(--color-border);
                border-radius: 9px;
                color: var(--color-text-secondary);
                transition: border-color 180ms ease, box-shadow 180ms ease, color 180ms ease;
            }

            a:hover,
            a:focus-visible {
                border-color: var(--color-primary);
                box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-primary) 14%, transparent);
                color: var(--color-primary);
                outline: none;
            }
        }

        @media (max-width: 600px) {
            align-items: flex-start;
            flex-direction: column;

            .footerLinks {
                justify-content: flex-start;
            }
        }
    `,
};
