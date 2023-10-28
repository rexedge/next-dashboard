import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
export const metadata: Metadata = {
	title: 'Customers',
};

export default async function Page({
	searchParams,
}: {
	searchParams?: {
		query?: string;
	};
}) {
	const query = searchParams?.query || '';

	const customers = await fetchFilteredCustomers(query);

	return (
		<div className='w-full'>
			<Suspense fallback={<InvoicesTableSkeleton />}>
				<CustomersTable customers={customers} />
			</Suspense>
		</div>
	);
}
