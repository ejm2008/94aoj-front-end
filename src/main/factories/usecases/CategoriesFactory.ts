import { GetCategories } from "../../../data/usecases/GetCategories";
import { Categories } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeAuthHttpClientDecorator } from "../decorators/authHttpClientDecoratorFactory";
import { MakeApiUrl } from "../http";

export const MakeCategories = (): Categories => {
  return new GetCategories(
    MakeApiUrl(apiRoutes.categories),
    MakeAuthHttpClientDecorator<unknown, Categories.Model>()
  )
}