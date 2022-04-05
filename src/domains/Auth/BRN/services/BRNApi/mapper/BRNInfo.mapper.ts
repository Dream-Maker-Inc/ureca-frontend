import { FindBrnInfoDto } from "../BRNApi.interface";
import { BrnInfo } from "../models/BRNInfo.model";
import { TaxPlayerType } from "../models/TaxPlayer.type";
import { TaxPlayerState } from "../models/TaxPlayerState.type";

export const BRNInfoMapper = {
  mapToDomain: ({ b_stt_cd, tax_type_cd }: FindBrnInfoDto): BrnInfo => {
    return {
      taxPlayerState: toTaxPlayerState(b_stt_cd),
      taxPlayerType: toTaxPlayerType(tax_type_cd),
    };
  },
};

const toTaxPlayerState = (b_stt_cd: string): TaxPlayerState => {
  switch (b_stt_cd) {
    case "01":
      return TaxPlayerState.Progress;
    case "02":
      return TaxPlayerState.Pause;
    case "03":
      return TaxPlayerState.Close;
    default:
      return TaxPlayerState.Progress;
  }
};

const toTaxPlayerType = (tax_type_cd: string): TaxPlayerType => {
  switch (tax_type_cd) {
    case "01":
      return TaxPlayerType.ValueAddedGeneral;
    case "02":
      return TaxPlayerType.ValueAddedTaxSimplified;
    case "03":
      return TaxPlayerType.SpecialTaxationOnValueAdded;
    case "04":
      return TaxPlayerType.ValueAddedDutyFree;
    case "05":
      return TaxPlayerType.NonProfitCorporations;
    case "06":
      return TaxPlayerType.OrganizationsWithUniqueNumber;
    case "07":
      return TaxPlayerType.ValueAddedTaxSimplifiedTax;
    default:
      return TaxPlayerType.Unknown;
  }
};
