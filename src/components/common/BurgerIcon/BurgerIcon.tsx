import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';
interface Props {
    isCross: boolean;
    className?: string;
    onClick: () => void;
}

export const Burger: React.FC<Props> = ({ isCross, className, onClick }) => (
    <svg width="1em" height="1em" viewBox="280 215 400 220" fill="currentColor" className={className} onClick={onClick}>
        <path
            className={classNames(isCross && styles.cross)}
            d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
            id="top"
        />
        <path className={classNames(isCross && styles.cross)} d="M300,320 L540,320" id="middle" />
        <path
            className={classNames(isCross && styles.cross)}
            d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
            id="bottom"
            transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
        />
    </svg>
);

export const BurgerIcon: React.FC<Props> = ({ className, ...restProps }) => {
    return <Burger className={classNames(className, styles.burgerIcon)} {...restProps} />;
};

// const BurgerIcon: React.FC<Props> = ({ isCross, className, onClick }) => {
//     return (
//         <svg width="1em" height="1em" viewBox="280 215 400 220" fill="currentColor" className={classNames(className, styles.burgerIcon)} onClick={onClick}>
//             <path
//                 className={classNames(isCross && styles.cross)}
//                 d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
//                 id="top"
//             />
//             <path className={classNames(isCross && styles.cross)} d="M300,320 L540,320" id="middle" />
//             <path
//                 className={classNames(isCross && styles.cross)}
//                 d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
//                 id="bottom"
//                 transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
//             />
//         </svg>
//     );
// };

export default BurgerIcon;
