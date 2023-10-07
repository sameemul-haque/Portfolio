export interface SkillsEvent {
	title: string;
	icon: string;
	link?: {
		text: string;
		url: string;
	};
}

export type Skills = Array<SkillsEvent>;
