import Link from "next/link";
import { Button } from "./ui/button";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium text-foreground/80">
      {children}
    </span>
  );
}

export default function Highlights() {
  return (
    <section id="highlights" className="container mx-auto grid gap-6">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Highlights
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4 space-y-3">
          <h3 className="text-lg font-semibold">Summary</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>
              Backend developer focused on C#/.NET and Node.js/TypeScript, with
              hands-on frontend experience.
            </li>
            <li>
              Comfortable designing data models and working with relational and
              document databases.
            </li>
            <li>
              Linux user with practical experience deploying and operating
              services.
            </li>
            <li>
              Currently pursuing a B.Sc. in Computer Science at The Open
              University of Israel while working full time.
            </li>
          </ul>
          <div>
            <Button asChild size="sm" variant="outline">
              <Link href="/resume.pdf" target="_blank">
                Download resume
              </Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border p-4 space-y-3">
          <h3 className="text-lg font-semibold">Core skills</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>C#</Badge>
            <Badge>.NET</Badge>
            <Badge>Node.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>JavaScript</Badge>
            <Badge>Java</Badge>
            <Badge>Python</Badge>
            <Badge>Linux</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>MySQL</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>MSSQL</Badge>
            <Badge>MongoDB</Badge>
            <Badge>Schema design</Badge>
            <Badge>Query tuning</Badge>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4 space-y-3">
          <h3 className="text-lg font-semibold">Protocols & realtime</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>HTTP</Badge>
            <Badge>WebSockets</Badge>
            <Badge>Server‑Sent Events (SSE)</Badge>
          </div>
        </div>

        <div className="rounded-lg border p-4 space-y-3">
          <h3 className="text-lg font-semibold">Integrations & automation</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>
              Built and maintained integrations: Facebook, Shopify, multiple
              payment systems.
            </li>
            <li>
              Auth flows, webhooks, data sync jobs, and idempotent handlers.
            </li>
            <li>
              Internal scripts to automate workflows and reduce manual ops.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
