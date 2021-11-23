import { MAIN_TYPES } from "@constants";
import { inject, injectable } from "inversify";

@injectable()
export class HexGridService implements IGridService {
    @inject(MAIN_TYPES.gameConfig) config!: IGameConfig;
   

}