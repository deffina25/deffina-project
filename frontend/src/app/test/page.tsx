import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Page',
  description: 'Test Description',
}

export default function Test() {
  return <h1>Test Page - Check title in browser tab</h1>
}
