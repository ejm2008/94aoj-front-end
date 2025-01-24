import { GetAppetizers } from "../../../data/usecases/GetAppetizers";
import { Appetizers } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeAuthHttpClientDecorator } from "../decorators/authHttpClientDecoratorFactory";
import { MakeApiUrl } from "../http";

export const MakeAppetizers = (): Appetizers => {
  return new GetAppetizers(
    MakeApiUrl(apiRoutes.appetizers),
    MakeAuthHttpClientDecorator<unknown, Appetizers.Model>()
  )
}