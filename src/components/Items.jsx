import React from "react";
import Accordion from "./Accordion";

function Items() {
	return (
		<>
			<div className="my-4 p-4 bg-gray-200 rounded-lg">
				<Accordion
					title="Which planet is known as the Red Planet?"
					answer="Mars, often referred to as the Red Planet due to its reddish appearance, is the fourth planet from the Sun in the solar system. Mars has fascinated astronomers and scientists for centuries with its distinct surface features, including vast deserts, polar ice caps, and ancient river valleys, suggesting the possibility of liquid water in the past. Exploration of Mars continues to captivate the imagination as humanity seeks to unravel its mysteries and potential for life."
				/>
			</div>

			<div className="my-4 p-4 bg-gray-200 rounded-lg">
				<Accordion
					title="What is the chemical symbol for water?"
					answer="The chemical symbol for water is H2O, indicating its composition of two hydrogen atoms bonded to one oxygen atom. Water is essential for life on Earth, serving as a universal solvent, medium for chemical reactions, and habitat for countless organisms. Its unique properties, such as surface tension, high heat capacity, and versatility, make it indispensable for various industrial, agricultural, and domestic purposes."
				/>
			</div>
			<div className="my-4 p-4 bg-gray-200 rounded-lg">
				<Accordion
					title="Who painted the Mona Lisa?"
					answer="The Mona Lisa, one of the most famous and enigmatic paintings in the world, was created by the Italian Renaissance artist Leonardo da Vinci. Painted between 1503 and 1506, the portrait depicts a woman with an ambiguous expression, captivating viewers with her mysterious smile and gaze. Leonardo's mastery of techniques such as sfumato, his attention to detail, and his innovative approach to portraiture have cemented the Mona Lisa's status as an icon of art history."
				/>
			</div>
			<div className="my-4 p-4 bg-gray-200 rounded-lg">
				<Accordion
					title="Who wrote 'Romeo and Juliet'?"
					answer="'Romeo and Juliet' is a tragedy written by William Shakespeare, one of the most famous playwrights in history. Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passionate romance ultimately leads to their tragic demise. Shakespeare's masterful storytelling and exploration of themes such as love, fate, and conflict have made 'Romeo and Juliet' a timeless classic."
				/>
			</div>
		</>
	);
}

export default Items;
