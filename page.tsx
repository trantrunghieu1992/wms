import { PackagePlus, ScanLine } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import DataTable, { type Column } from "@/components/ui/DataTable";
import { receivingTasks } from "@/lib/mock-data";

type Receiving = (typeof receivingTasks)[number];

const columns: Column<Receiving>[] = [
  { key: "asn", header: "ASN", mono: true },
  { key: "po", header: "PO Reference", mono: true },
  { key: "dock", header: "Dock" },
  { key: "carrier", header: "Carrier" },
  { key: "expected", header: "Expected Time" },
  { key: "status", header: "Status", isStatus: true },
];

export default function ReceivingPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        icon={PackagePlus}
        eyebrow="Inbound"
        title="Receiving"
        description="Dock schedule and inbound shipment check-in."
        action={<Button variant="primary" icon={ScanLine}>Start Receiving</Button>}
      />
      <DataTable columns={columns} data={receivingTasks} searchKeys={["asn", "po", "carrier"]} />
    </div>
  );
}
