import { GetDesserts } from "../../../data/usecases/GetDesserts";
import { Desserts } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeAuthHttpClientDecorator } from "../decorators/authHttpClientDecoratorFactory";
import { MakeApiUrl } from "../http";

export const MakeDesserts = (): Desserts => {
  return new GetDesserts(
    MakeApiUrl(apiRoutes.desserts),
    MakeAuthHttpClientDecorator<unknown, Desserts.Model>()
  )
}