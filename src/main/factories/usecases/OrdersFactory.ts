import { PostOrders } from "../../../data/usecases/PostOrders";
import { Orders } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeAuthHttpClientDecorator } from "../decorators/authHttpClientDecoratorFactory";
import { MakeApiUrl } from "../http";

export const MakeOrders = (): Orders => {
  return new PostOrders(
    MakeApiUrl(apiRoutes.createOrder),
    MakeAuthHttpClientDecorator<Orders.Params, Orders.Model>()
  );
};
