import getDecorators from "inversify-inject-decorators";
import { appContainer } from "@di";

export const { lazyInject } = getDecorators(appContainer); 