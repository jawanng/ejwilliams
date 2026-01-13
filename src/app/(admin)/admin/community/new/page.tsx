'use client';

import { createCommunityWork } from '@/app/lib/actions/community';
import Link from 'next/link';

export default function NewCommunityWorkPage() {
    return (
        <div className="container py-5">
            <h1 className="text-2xl font-bold mb-4">Add Community Work</h1>

            <form action={createCommunityWork} className="max-w-2xl">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" id="title" className="form-control" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description / Blurb</label>
                    <textarea name="description" id="description" className="form-control" rows={5} required></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" name="image" id="image" className="form-control" accept="image/*" />
                    <div className="form-text">Recommended size: 800x600px</div>
                </div>

                <div className="flex gap-3 mt-4">
                    <button type="submit" className="btn btn-primary">Save Work</button>
                    <Link href="/admin/community" className="btn btn-secondary">Cancel</Link>
                </div>
            </form>
        </div>
    );
}
