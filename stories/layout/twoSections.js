// @flow
import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { Grid, Item, Layout } from '../../src'
import { WithExtensions, loremIpsum } from '../core'
import styles from './layout.css'

const { PARENT, AUTO, STRETCH } = Layout.TYPE
const { TOP } = Layout.FIXED_POSITION

export default function() {
  const includeText = boolean('Show text', false)
  const notes =
    'This example shows a page divided in 2 horizontal sections of arbitrary height'

  return (
    <WithExtensions notes={notes}>
      <Layout type={PARENT} className={styles.page}>
        <Layout className={styles.header} fixed={TOP}>
          <Grid root>
            <h1>Header</h1>
          </Grid>
        </Layout>
        <Layout type={PARENT} className={styles.main}>
          <Layout type={AUTO} className={styles.top}>
            <Grid root>
              <Grid>
                <Item size={6} offset={2}>
                  <input type="text" placeholder="Some search here" />
                </Item>
                <Item size={2}>
                  <button>Search</button>
                </Item>
              </Grid>
            </Grid>
          </Layout>
          <Layout type={STRETCH}>
            <Grid root>
              <Grid className={styles.content} align={Grid.ALIGN.TOP}>
                <h2>Content</h2>
                {includeText && <p>{loremIpsum}</p>}
              </Grid>
            </Grid>
          </Layout>
          <Layout type={AUTO} className={styles.footer}>
            <Grid root>
              <h1>Footer</h1>
            </Grid>
          </Layout>
        </Layout>
      </Layout>
    </WithExtensions>
  )
}