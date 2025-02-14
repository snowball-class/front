import { TabProps } from '@/types'
import { Button } from '@/components/ui/button'

const SubTab = (props: TabProps) => {
  const { tabList, currentTab, handleTabChange } = props
  return (
    <>
      <div>
        <div className="flex space-x-3 py-6">
          {tabList.map((item) => (
            <div key={item.id}>
              {item.id === currentTab ? (
                <Button bgColor="blue" size="default">
                  {item.tabName}
                </Button>
              ) : (
                <Button
                  bgColor="gray"
                  size="default"
                  onClick={() => handleTabChange(item.id)}
                >
                  {item.tabName}
                </Button>
              )}
            </div>
          ))}
        </div>
        {tabList.map(
          (item) =>
            item.id === currentTab && <div key={item.id}>{item.tabContent}</div>
        )}
      </div>
    </>
  )
}

export default SubTab
