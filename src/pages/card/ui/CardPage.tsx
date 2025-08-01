import styles from './styles.module.css';

import { useCards } from '@/entities/cards';
import { FaAngleLeft, FaAngleRight, FaX } from 'react-icons/fa6';

export const CardPage = () => {
	const { cards, currentCard, nextCard, prevCard, currentIndex, close } =
		useCards();

	// @ts-ignore
	const canGoPrev = currentIndex > 0;
	// @ts-ignore
	const canGoNext = currentIndex < cards.length - 1;

	return (
		<section className={styles.card}>
			{/* Header */}
			<div className={styles.header}>
				<h1 className={styles.title}>{currentCard?.title}</h1>
				<div className={styles.close} onClick={() => close()}>
					<FaX size={18} />
				</div>
			</div>

			{/* Content with arrows and scrollable center */}
			<div className={styles.content}>
				{/* Left Arrow */}
				<div
					className={styles.arrow}
					onClick={canGoPrev ? prevCard : undefined}
					style={{
						opacity: canGoPrev ? 1 : 0.3,
					}}
				>
					<FaAngleLeft size={16} />
				</div>

				{/* Scrollable Text Content */}
				<div className={styles.textContainer}>
					<pre className={styles.text}>{currentCard?.text}</pre>
				</div>

				{/* Right Arrow */}
				<div
					className={styles.arrow}
					onClick={canGoNext ? nextCard : undefined}
					style={{
						opacity: canGoNext ? 1 : 0.3,
					}}
				>
					<FaAngleRight size={16} />
				</div>
			</div>
		</section>
	);
};
