import { GetHamburgers } from "../../../data/usecases/GetHamburgers";
import { Hamburgers } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeAuthHttpClientDecorator } from "../decorators/authHttpClientDecoratorFactory";
import { MakeApiUrl } from "../http";

export const MakeHamburgers = (): Hamburgers => {
  return new GetHamburgers(
    MakeApiUrl(apiRoutes.hamburgers),
    MakeAuthHttpClientDecorator<unknown, Hamburgers.Model>()
  )
}