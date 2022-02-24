import { nextFrame } from '~/components/utils'

// create a hidden <a/> and download file
const downloadFile = (blobUrl) => {
    const createAnchor = () => {
        const anchor = document.createElement('a')

        anchor.href = blobUrl

        anchor.download = 'invoice.pdf'

        anchor.classList.add('sr-only')

        anchor.title = 'Download order invoice'

        return anchor
    }

    const elem = createAnchor()

    document.body.append(elem)

    elem.click()

    URL.revokeObjectURL(blobUrl)

    nextFrame(() => elem.remove())
}

export default async function requestDownload(uuid) {
    try {
        const { data } = await this.$axios.$get(`order/${uuid}/download`)

        const file = new File([data], 'invoice.pdf')

        const blobUrl = URL.createObjectURL(file)

        downloadFile(blobUrl)

        return { data: 1 }
    } catch (error) {
        return { error }
    }
}