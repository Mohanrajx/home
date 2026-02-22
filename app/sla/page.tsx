import { LegalPage } from '@/components/legal';

export default function SLA() {
  return <LegalPage title="Service Level Agreement (Simplified)"><h2>1. Coverage</h2><p>Applies to active partnership retainers and enterprise support contracts.</p><h2>2. Response Targets</h2><ul><li>Critical incidents: initial response within 2 hours</li><li>High priority: within 8 hours</li><li>Standard priority: within 1 business day</li></ul><h2>3. Availability Commitment</h2><p>For managed platform services, monthly target availability is 99.9% excluding scheduled maintenance.</p><h2>4. Exclusions</h2><p>Excludes force majeure events, third-party outages outside control, and client-introduced defects.</p><h2>5. Service Credits</h2><p>Where explicitly contracted, credits may apply for repeated SLA breaches and are limited to future service invoices.</p></LegalPage>;
}
