import Layout from "../components/Layout"

export default function CustomNotFound() {
    return <Layout>
        <div
            class="p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
            role="alert"
            >
            <strong class="text-sm font-medium"> Page is not found </strong>
            </div>
    </Layout>
}