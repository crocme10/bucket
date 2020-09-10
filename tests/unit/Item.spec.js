import { shallowMount } from '@vue/test-utils'
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
