import { useShowcaseStore } from '../../store/useShowcaseStore';

import crossrefDropInBoxIcon from '/src/assets/icons/cross-reference-empty.png';
import squares2 from '/src/assets/icons/squares2.png';

export function CrossRefDropInBox(props) {
	const goToCrossSearch = useShowcaseStore((s) => s.goToCrossSearch);

  return (
	<div onMouseEnter={props.popupEnter} onMouseLeave={props.popupLeave} id="crossref-dropin-wrapper">
		<div id="crossref-dropin-container">
			<div id="crossref-dropin-header">
				<div id="crossref-dropin-title">
					<img src={squares2} alt="squares2 icon" className="squares2" />
					CROSS_REFERENCE.exe
				</div>
			</div>
			<div id="crossref-dropin-body">
				<div id="crossref-dropin-body-left"> 
					<div>Drag & drop an image and find out the best connection with one of the best games!</div>
				</div>
				<div id="crossref-dropin-body-right">
					<div id="crossref-dropin-dropzone">
						<img src={crossrefDropInBoxIcon} alt="crossref icon" id="crossref-dropin-box-icon" />
						<button
							id="crossref-dropin-dropzone-text"
							onClick={goToCrossSearch}
						>
							[ TRY ME! ]
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}