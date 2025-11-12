

import { InventoryForm } from '../types';

import { IANA_INVENTORY } from './iana';
import { IFEC_INVENTORY } from './ifec';
import { IAPM_INVENTORY } from './iapm';
import { IFMSC_INVENTORY } from './ifmsc';
import { IRECI_INVENTORY } from './ireci';
import { IEPI_INVENTORY } from './iepi';
import { IEVA_INVENTORY } from './ieva';
import { IPM_INVENTORY } from './ipm';
import { IRPT_INVENTORY } from './irpt';
import { IEC_INVENTORY } from './iec';
import { IAC_INVENTORY } from './iac';
import { IAT_INVENTORY } from './iat';
import { IAEC_INVENTORY } from './iaec';
import { IAME_INVENTORY } from './iame';
import { IMC_INVENTORY } from './imc';
import { IAAE_INVENTORY } from './iaae';
import { IES_INVENTORY } from './ies';
import { IAPE_INVENTORY } from './iape';
import { IFA_INVENTORY } from './ifa';
import { IASO_INVENTORY } from './iaso';
import { IDSE_INVENTORY } from './idse';
import { ISSM_INVENTORY } from './issm';
import { ICCR_INVENTORY } from './iccr';
import { IQE_INVENTORY } from './iqe';
import { ISA_INVENTORY } from './isa';
import { IOP_INVENTORY } from './iop';
import { ICTE_INVENTORY } from './icte';
import { ICMI_INVENTORY } from './icmi';
import { IVM_INVENTORY } from './ivm';
import { ISV_INVENTORY } from './isv';
import { ICSE_INVENTORY } from './icse';
import { IET_INVENTORY } from './iet';
import { IHS_INVENTORY } from './ihs';
import { ISDA_INVENTORY } from './isda';
import { IAAC_INVENTORY } from './iaac';
import { IEV_INVENTORY } from './iev';
import { IRF_INVENTORY } from './irf';
import { ICF_INVENTORY } from './icf';
import { IAR_INVENTORY } from './iar';
import { IFE_INVENTORY } from './ife';
import { EAA_INVENTORY } from './eaa';
import { EAR_INVENTORY } from './ear';
import { IAE_INVENTORY } from './iae';
import { IQVL_INVENTORY } from './iqvl';
import { ITIA_INVENTORY } from './itia';
import { IASM_INVENTORY } from './iasm';
import { IMIE_INVENTORY } from './imie';
import { IPSE_INVENTORY } from './ipse';
import { IAAP_INVENTORY } from './iaap';
import { ICSA_INVENTORY } from './icsa';
import { IECAD_INVENTORY } from './iecad';
import { IECP_INVENTORY } from './iecp';
import { ICE_INVENTORY } from './ice';
import { IFAA_INVENTORY } from './ifaa';
import { IMAP_INVENTORY } from './imap';
import { IELV_INVENTORY } from './ielv';
import { IRHP_INVENTORY } from './irhp';
import { ITFFS_INVENTORY } from './itffs';
import { IIEP_INVENTORY } from './iiep';
import { IFPM_INVENTORY } from './ifpm';
import { IERET_INVENTORY } from './ier-et';
import { IPLAD_INVENTORY } from './iplad';
import { ICDF_INVENTORY } from './icdf';
import { ICDFO_INVENTORY } from './icdf-o';
import { ICDFC_INVENTORY } from './icdf-c';
import { IEE_INVENTORY } from './iee';
import { IAS_INVENTORY } from './ias';


export const ALL_INVENTORIES: { [key: string]: InventoryForm } = {
  IANA: IANA_INVENTORY,
  IFEC: IFEC_INVENTORY,
  IAPM: IAPM_INVENTORY,
  IFMSC: IFMSC_INVENTORY,
  IRECI: IRECI_INVENTORY,
  IAAE: IAAE_INVENTORY,
  IEPI: IEPI_INVENTORY,
  IEVA: IEVA_INVENTORY,
  IPM: IPM_INVENTORY,
  IRPT: IRPT_INVENTORY,
  IEC: IEC_INVENTORY,
  IAC: IAC_INVENTORY,
  IAT: IAT_INVENTORY,
  IAEC: IAEC_INVENTORY,
  IAME: IAME_INVENTORY,
  IMC: IMC_INVENTORY,
  IES: IES_INVENTORY,
  IAPE: IAPE_INVENTORY,
  IFA: IFA_INVENTORY,
  IASO: IASO_INVENTORY,
  IDSE: IDSE_INVENTORY,
  ISSM: ISSM_INVENTORY,
  ICCR: ICCR_INVENTORY,
  IQE: IQE_INVENTORY,
  ISA: ISA_INVENTORY,
  IOP: IOP_INVENTORY,
  ICTE: ICTE_INVENTORY,
  ICMI: ICMI_INVENTORY,
  IVM: IVM_INVENTORY,
  ISV: ISV_INVENTORY,
  ICSE: ICSE_INVENTORY,
  IET: IET_INVENTORY,
  IHS: IHS_INVENTORY,
  ISDA: ISDA_INVENTORY,
  IAAC: IAAC_INVENTORY,
  IEV: IEV_INVENTORY,
  IRF: IRF_INVENTORY,
  ICF: ICF_INVENTORY,
  IAR: IAR_INVENTORY,
  IFE: IFE_INVENTORY,
  EAA: EAA_INVENTORY,
  EAR: EAR_INVENTORY,
  IAE: IAE_INVENTORY,
  IQVL: IQVL_INVENTORY,
  ITIA: ITIA_INVENTORY,
  IASM: IASM_INVENTORY,
  IMIE: IMIE_INVENTORY,
  IPSE: IPSE_INVENTORY,
  IAAP: IAAP_INVENTORY,
  ICSA: ICSA_INVENTORY,
  IECAD: IECAD_INVENTORY,
  IECP: IECP_INVENTORY,
  ICE: ICE_INVENTORY,
  IFAA: IFAA_INVENTORY,
  IMAP: IMAP_INVENTORY,
  IELV: IELV_INVENTORY,
  IRHP: IRHP_INVENTORY,
  ITFFS: ITFFS_INVENTORY,
  IIEP: IIEP_INVENTORY,
  IFPM: IFPM_INVENTORY,
  'IER-ET': IERET_INVENTORY,
  IPLAD: IPLAD_INVENTORY,
  ICDF: ICDF_INVENTORY,
  'ICDF-O': ICDFO_INVENTORY,
  'ICDF-C': ICDFC_INVENTORY,
  IEE: IEE_INVENTORY,
  IAS: IAS_INVENTORY,
};