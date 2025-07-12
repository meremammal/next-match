import { Spinner } from "@heroui/react";

export default function LoadingComponent({label}: {label?: string}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
        <Spinner label={label || "Loading..."} labelColor="secondary" />
    </div>
  )
}