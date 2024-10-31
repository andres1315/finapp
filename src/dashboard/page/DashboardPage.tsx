import { MainSideBar } from "../components/MainSideBar"

export const DashboardPage = () => {
  return (
    <>
      <div className="h-screen flex flex-row">
        <MainSideBar />
        <div className="mx-auto mt-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">

          <h1>Account balance</h1>
          <p>Your account balance is $10,000</p>
          <h1>Recent orders</h1>
          <p>You have made the following orders:</p>
          <ul>
            <li>Order #12345</li>
            <li>Order #67890</li>
            <li>Order #54321</li>
          </ul>
          </div>

        </div>
      </div>
      

    </>
  )
}