import { DI_TYPES } from "@constants";
import { inject, injectable } from "inversify";

@injectable()
export class HexGridService implements IGridService {
    @inject(DI_TYPES.gameConfig) config!: IGameConfig;
   

}