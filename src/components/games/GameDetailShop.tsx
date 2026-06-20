import type { GameDetailProps } from "../props/GameDetailProps";

type Props = {
	game: GameDetailProps;
};

export function GameDetailShop({ game }: Props) {
	return (
		<div id="game-detail__shop">
			<div className="game-detail__shop-header">
				<span>Shop</span>
				<span> {game.title} </span>
			</div>
		</div>
	)
}