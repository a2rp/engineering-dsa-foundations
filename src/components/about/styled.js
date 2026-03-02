// src/components/about/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 8px;

        .top {
            padding: 14px 2px 10px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
        }

        .sub {
            margin-top: 8px;
            max-width: 900px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .grid {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            box-shadow: 0 18px 40px var(--color-shadow);
            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image: radial-gradient(
                    700px 220px at 15% 10%,
                    color-mix(in srgb, var(--color-primary) 10%, transparent),
                    transparent 60%
                );
                opacity: 0.9;
            }
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;
            z-index: 1;
        }

        .cIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );

            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
        }

        .p {
            margin-top: 10px;
            position: relative;
            z-index: 1;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            margin-top: 10px;
            position: relative;
            z-index: 1;
            display: grid;
            gap: 6px;
            color: var(--color-text-secondary);
            font-weight: 700;
            font-size: 13px;

            li {
                padding-left: 18px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                width: 8px;
                height: 8px;
                border-radius: 999px;
                background: color-mix(
                    in srgb,
                    var(--color-accent) 70%,
                    transparent
                );
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-accent) 16%, transparent);
            }
        }

        .bottom {
            margin-top: 12px;
            display: grid;
            gap: 12px;
        }

        .callout {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 14px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            box-shadow: 0 18px 40px var(--color-shadow);

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            @media (width < 980px) {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        .calloutLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .bIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );

            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }
        }

        .calloutText {
            min-width: 0;
        }

        .bTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .bSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.55;
            max-width: 820px;
        }

        .calloutRight {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: flex-end;

            @media (width < 980px) {
                justify-content: flex-start;
            }
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .note {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 12px 14px;

            background: color-mix(in srgb, var(--color-surface-2) 62%, #000);

            box-shadow: 0 18px 40px var(--color-shadow);

            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .nIcon {
            margin-top: 2px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 72%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 78%,
                    var(--color-text-primary)
                );
            }
        }

        .nText {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-weight: 700;
        }
    `,
};
