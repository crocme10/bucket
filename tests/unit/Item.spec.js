import { shallowMount } from '@vue/test-utils'
import ItemList from '@/views/ItemList.vue'
import Item from '@/components/Item.vue'

describe('Item.vue', () => {
  test('renders item.url', () => {
    const item = {
      title: 'item title',
      url: 'http://foo.com'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    const anchor = wrapper.find('a')
    expect(anchor.text()).toBe(item.title)
    expect(anchor.attributes().href === item.url).toBe(true)
  })
})

describe('ItemList.vue', () => {
  test('renders an Item for each item in window.items', () => {
    window.items = [{}, {}, {}]

    const wrapper = shallowMount(ItemList)

    expect(wrapper.findAllComponents(Item)).toHaveLength(window.items.length)
  })
})
