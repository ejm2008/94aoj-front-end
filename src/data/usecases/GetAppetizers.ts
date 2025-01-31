import {
    Appetizers,
    BadRequestError,
    ForbiddenError,
    InternalServerError,
    NotFoundError,
    PreconditionFailedError,
    UnauthorizedError,
    UnprocessableEntityError,
  } from "../../domain"
  import { HttpClient, HttpStatusCode } from "../protocols"

  export class GetAppetizers implements Appetizers {

    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<Appetizers.Model>
    ) {}

    async appetizer(): Promise<Appetizers.Model[]> {
      const httpResponse = await this.httpClient.request({
          url: `${this.url}`,
          method: "get",
      })

      switch (httpResponse.statusCode) {
        case HttpStatusCode.Ok:
          return httpResponse.body as Appetizers.Model[]
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