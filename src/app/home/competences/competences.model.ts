import { Niveau } from './niveau.model';
import { GroupeCompetences } from '../groupe-competences/groupe-competences.model';

export class Competences {
  id?: any;
  nomCompetence?: string;
  description?: string;
  niveau?: Niveau[];
  gpeCompetences?: GroupeCompetences[];
}
