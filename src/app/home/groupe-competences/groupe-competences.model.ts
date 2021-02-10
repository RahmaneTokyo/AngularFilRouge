import { Competences } from '../competences/competences.model';

export class GroupeCompetences {
  id?: number;
  libelle?: string;
  description?: string;
  competence!: Competences[];
}
