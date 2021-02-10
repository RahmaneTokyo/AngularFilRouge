import {GroupeCompetences} from '../groupe-competences/groupe-competences.model';

export class Referentiel {
  id?: string;
  libelle?: string;
  presentation?: string;
  programme?: File;
  admission?: string;
  evaluation?: string;
  gpeCompetence?: GroupeCompetences[];
}
