import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 20px;

        .top {
            margin-bottom: 14px;
        }

        .title {
            font-size: 22px;
            font-weight: 900;
        }

        .sub {
            margin-top: 6px;
            color: var(--color-text-secondary);
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .accBtn {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .accIcon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .accTitle {
            font-weight: 800;
        }

        .accHint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            transition: transform 160ms ease;
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            max-height: 0;
            overflow: hidden;
            transition: max-height 240ms ease;
        }

        .panel.open {
            max-height: 5000px;
        }

        .panelInner {
            padding: 16px;
            display: grid;
            gap: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 14px;
            background: var(--color-surface-2);
        }

        .code {
            margin-top: 8px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 12px;
            font-family: monospace;
            font-size: 13px;
            white-space: pre-wrap;
        }

        ul {
            margin-top: 8px;
            padding-left: 16px;
        }
    `,
};
