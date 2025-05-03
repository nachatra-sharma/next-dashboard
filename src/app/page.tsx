import AppAreaChart from '@/components/AppAreaChart'
import AppBarChart from '@/components/AppBarChart'
import AppPieChart from '@/components/AppPieChart'

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 py-5">
      <div className="bg-primary-foreground grid-cols-1 p-4 rounded-lg xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground grid-cols-1 p-4 rounded-lg">
        Test
      </div>
      <div className="bg-primary-foreground grid-cols-1 p-4 rounded-lg">
        Test
      </div>
      <div className="bg-primary-foreground grid-cols-1 p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground grid-cols-1 p-4 rounded-lg xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground grid-cols-1 p-4 rounded-lg">
        Test
      </div>
    </div>
  )
}
