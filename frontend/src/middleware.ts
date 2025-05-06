import { stackMiddlewares } from "@app/utils/middlewares/stack-middlewares";
import { withErrorHandler } from "@app/utils/middlewares/with-error-handling";
import { withFeatures } from "@app/utils/middlewares/with-features";
import { withLogging } from "@app/utils/middlewares/with-logging";

export default stackMiddlewares([withLogging, withFeatures, withErrorHandler]);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/*|auth|favicon.ico|robots.txt|images|$).*)",
  ],
};
