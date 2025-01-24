import {
  Orders,
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  PreconditionFailedError,
  UnauthorizedError,
  UnprocessableEntityError,
} from "../../domain"
import { HttpClient, HttpStatusCode } from "../protocols"

export class PostOrders implements Orders {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<
      Orders.Params,
      Orders.Model
    >
  ) {}

  async order(params: Orders.Params): Promise<Orders.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}`,
      method: "post",
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.Ok:
        return httpResponse.body as Orders.Model
      case HttpStatusCode.Forbidden:
        throw new ForbiddenError()
      case HttpStatusCode.PreconditionFailed:
        throw new PreconditionFailedError()
      case HttpStatusCode.UnprocessableEntity:
        throw new UnprocessableEntityError()
      case HttpStatusCode.BadRequest:
        throw new BadRequestError()
      case HttpStatusCode.Unauthorized:
        throw new UnauthorizedError()
      case HttpStatusCode.NotFound:
        throw new NotFoundError()
      default:
        throw new InternalServerError()
    }
  }
}
