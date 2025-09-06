import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export default function CaseStudies() {
  return (
    <section
      id="projects"
      aria-labelledby="case-studies-heading"
      className="grid gap-4"
    >
      <h2
        id="case-studies-heading"
        className="text-2xl md:text-3xl font-semibold tracking-tight"
      >
        Case Studies
      </h2>
      <div className="grid gap-4">
        {/* Latency improvement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center gap-2">
              Improved legacy API latency by 50%
              <span className="sr-only">Latency improvement case study</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Reduced data loads and added targeted database indexes to cut
                p95 latency by 50%.
              </li>
              <li>
                Rewrote heavy queries into selective queries with proper
                filtering, pagination, and fewer round trips.
              </li>
              <li>
                Eliminated N+1 access patterns and aligned ORM usage to leverage
                covering indexes.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge>indexing</Badge>
              <Badge>query tuning</Badge>
              <Badge>p95</Badge>
              <Badge>selective loads</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Greenfield API */}
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center gap-2">
              Built a production API from scratch
              <span className="sr-only">Greenfield API case study</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Designed and implemented a new API now serving thousands of
                requests per day in production.
              </li>
              <li>
                Implemented realtime features using WebSockets and Server-Sent
                Events (SSE).
              </li>
              <li>
                Added authentication, rate limits, and structured logging for
                safe operations and observability.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge>WebSockets</Badge>
              <Badge>SSE</Badge>
              <Badge>auth</Badge>
              <Badge>observability</Badge>
            </div>
          </CardContent>
        </Card>

        {/* AI assistants */}
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center gap-2">
              Integrated AI assistants to help users find what they need
              <span className="sr-only">AI assistants case study</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Integrated OpenAI and Claude with function calling to power
                helpful on-site bots.
              </li>
              <li>
                Tools-based design routes user requests to internal actions and
                sources of truth safely.
              </li>
              <li>
                Added guardrails, input validation, and fallbacks to keep
                responses grounded and reliable.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge>OpenAI</Badge>
              <Badge>Claude</Badge>
              <Badge>function calling</Badge>
              <Badge>guardrails</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
