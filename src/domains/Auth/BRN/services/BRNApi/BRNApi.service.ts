import { brnClient } from "@/common/dataSource/BRN.client";
import {
  BRNApiInterface,
  FindBrnInfoDto,
  FindBrnInfoResponse,
} from "./BRNApi.interface";
import { BRNInfoMapper } from "./mapper/BRNInfo.mapper";
import { BrnInfo } from "./models/BRNInfo.model";

const { NEXT_PUBLIC_BRN_SERVICE_KEY } = process.env;

class BRNApi implements BRNApiInterface {
  private static instance: BRNApi;
  static get Instance(): BRNApi {
    return this.instance || (this.instance = new this());
  }

  async findBrnInfo(brn: string): Promise<BrnInfo> {
    const { data } = await brnClient.post<FindBrnInfoResponse>(
      `/v1/status?serviceKey=${NEXT_PUBLIC_BRN_SERVICE_KEY}`,
      {
        b_no: [brn],
      }
    );

    const responseData: FindBrnInfoDto = data.data[0];
    const brnInfo: BrnInfo = BRNInfoMapper.mapToDomain(responseData);

    return brnInfo;
  }
}

export default BRNApi.Instance;
