 "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Video,
  MessageSquare,
  Send,
  X,
  Play,
  CheckCircle2,
  Upload,
  Quote,
  MessageCircle,
} from "lucide-react";

export default function ReviewSection() {
  // 👇 Fake reviews hata diye. Ab shuru me sirf empty array hai.
  const [reviews, setReviews] = useState<any[]>([]);
  
  const [showForm, setShowForm] = useState(false);
  const [reviewType, setReviewType] = useState<"text" | "video">("text");
  const [submitted, setSubmitted] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    rating: 5,
    content: "",
  });
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Naya Review Object banayein
    const newReview = {
      id: Date.now(),
      name: formData.name,
      company: formData.company,
      type: reviewType,
      rating: formData.rating,
      content: formData.content || (reviewType === "video" ? "Video review submitted." : ""),
      videoUrl: videoPreview || "",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80", // Fallback thumbnail
      date: "Just now",
      avatar: formData.name.charAt(0).toUpperCase(),
      color: "bg-indigo-100 text-indigo-600",
    };

    // Real-time update: Naya review list me sabse upar add karein
    setReviews([newReview, ...reviews]);
    setSubmitted(true);
    
    // 3 second baad form reset karein
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({ name: "", company: "", rating: 5, content: "" });
      setVideoFile(null);
      setVideoPreview(null);
      setReviewType("text");
    }, 3000);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ============ HEADER ============ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs text-slate-700 font-bold uppercase tracking-wider">
                Real-Time Reviews
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-slate-600 max-w-xl">
              Real feedback from real businesses. Read text and video reviews, or share your own experience.
            </p>
          </div>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            {showForm ? (
              <>Cancel <X size={18} /></>
            ) : (
              <>Write a Review <Star size={18} /></>
            )}
          </button>
        </div>

        {/* ============ SUBMIT FORM (Animated) ============ */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 overflow-hidden"
            >
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 size={56} className="text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900">Thank You! 🎉</h3>
                    <p className="text-slate-600">Your review has been added successfully.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Type Toggle (Text / Video) */}
                    <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl w-fit">
                      <button
                        type="button"
                        onClick={() => setReviewType("text")}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                          reviewType === "text" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        <MessageSquare size={16} /> Text Review
                      </button>
                      <button
                        type="button"
                        onClick={() => setReviewType("video")}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                          reviewType === "video" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        <Video size={16} /> Video Review
                      </button>
                    </div>

                    {/* Name & Company */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Company / Project Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFormData({ ...formData, rating: star })}
                            className="focus:outline-none hover:scale-110 transition-transform"
                          >
                            <Star
                              size={32}
                              className={star <= formData.rating ? "text-yellow-400" : "text-slate-300"}
                              fill={star <= formData.rating ? "#facc15" : "none"}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Text or Video Input */}
                    {reviewType === "text" ? (
                      <textarea
                        required
                        rows={4}
                        placeholder="Share your experience with LavixTech..."
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    ) : (
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Upload Video (MP4, WebM)</label>
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-xl hover:border-indigo-500 cursor-pointer bg-slate-50 transition-colors">
                          <Upload size={24} className="text-slate-400 mb-2" />
                          <span className="text-sm text-slate-500">Click to upload your video review</span>
                          <input type="file" accept="video/*" onChange={handleVideoUpload} className="hidden" />
                        </label>
                        {videoPreview && (
                          <video src={videoPreview} controls className="mt-4 w-full h-48 object-cover rounded-xl bg-black" />
                        )}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                    >
                      Submit Review <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============ REVIEWS GRID / EMPTY STATE ============ */}
        {reviews.length === 0 ? (
          /* 👇 EMPTY STATE (Jab koi review na ho) 👇 */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-6 bg-white rounded-3xl border border-slate-200 border-dashed"
          >
            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={32} className="text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No reviews yet
            </h3>
            <p className="text-slate-500 max-w-md mx-auto mb-6">
              Be the first one to share your experience with LavixTech. Your feedback helps us grow and helps others make the right decision.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
            >
              Write the First Review
            </button>
          </motion.div>
        ) : (
          /* 👇 REVIEWS LIST 👇 */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow relative"
              >
                {/* Quote Icon */}
                <Quote size={40} className="absolute top-6 right-6 text-slate-100" fill="currentColor" />

                {/* Header */}
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${review.color}`}>
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{review.name}</p>
                    <p className="text-xs text-slate-500">{review.company}</p>
                  </div>
                  <span className="ml-auto text-xs text-slate-400">{review.date}</span>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400" fill="#facc15" />
                  ))}
                </div>

                {/* Content (Text or Video) */}
                <div className="relative z-10">
                  {review.type === "text" ? (
                    <p className="text-sm text-slate-600 leading-relaxed">"{review.content}"</p>
                  ) : (
                    <div>
                      <div className="relative rounded-xl overflow-hidden mb-3 bg-slate-900">
                        {playingVideo === review.videoUrl ? (
                          <video src={review.videoUrl} controls autoPlay className="w-full h-40 object-contain" />
                        ) : (
                          <div className="relative cursor-pointer group" onClick={() => setPlayingVideo(review.videoUrl || null)}>
                            <img src={review.thumbnail} alt="Video thumbnail" className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play size={20} className="text-white ml-1" fill="white" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 italic">"{review.content}"</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}