import { TabsTrigger } from "@radix-ui/react-tabs"

type Props = { value: string; label: string; }

export default function TabsButton({ value, label }: Props) {
    return (
        <TabsTrigger
            value={value}
            className=" flex-1 text-center py-2 rounded-lg cursor-pointer text-gray-700 data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:font-semibold transition-colors duration-200">
            {label}
        </TabsTrigger>
    )
}