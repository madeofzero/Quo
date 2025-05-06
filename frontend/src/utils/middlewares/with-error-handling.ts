import { ensureError, BaseError } from "@app/types/error-types";
import { MiddlewareFactory } from "@app/types/middleware-types";
import { NextFetchEvent, NextRequest } from "next/server";

export const withErrorHandler: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    try {
      await next(request, _next);
    } catch (err) {
      const error = ensureError(err);
      throw new BaseError("withErrorHandler", {
        error,
      });
    }
  };
};
