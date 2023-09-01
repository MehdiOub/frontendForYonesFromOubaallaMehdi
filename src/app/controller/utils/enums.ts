export enum SectionStatus {
    NULL = '',
    VALIDATE = "Validate",
    CONTENU_MESSING = "Contenu Messing",
    MEDIA_MESSING = "Media Messing",
    QUIZ_MESSING = "Quiz Messing",
    PENDING = "Pending",
}

export const SECTION_STATUS_LIST = [
    SectionStatus.NULL,
    SectionStatus.VALIDATE,
    SectionStatus.PENDING,
    SectionStatus.MEDIA_MESSING,
    SectionStatus.CONTENU_MESSING,
    SectionStatus.QUIZ_MESSING,
];