import { GetBeverages } from "../../../data/usecases/GetBeverages";
import { Beverages } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeAuthHttpClientDecorator } from "../decorators/authHttpClientDecoratorFactory";
import { MakeApiUrl } from "../http";

export const MakeBeverages = (): Beverages => {
  return new GetBeverages(
    MakeApiUrl(apiRoutes.beverages),
    MakeAuthHttpClientDecorator<unknown, Beverages.Model>()
  )
}