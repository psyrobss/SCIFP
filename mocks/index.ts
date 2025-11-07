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
};