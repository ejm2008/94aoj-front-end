import { GetPayment } from "../../../data/usecases/GetPayment";
import { Payment } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeAuthHttpClientDecorator } from "../decorators/authHttpClientDecoratorFactory";
import { MakeApiUrl } from "../http";

export const MakePayment = (): Payment => {
  return new GetPayment(
    MakeApiUrl(apiRoutes.payment),
    MakeAuthHttpClientDecorator<unknown, Payment.Model>()
  )
}