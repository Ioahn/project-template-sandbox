import getDecorators from "inversify-inject-decorators";
import { appContainer } from "src/di.config";

export const { lazyInject } = getDecorators(appContainer);
